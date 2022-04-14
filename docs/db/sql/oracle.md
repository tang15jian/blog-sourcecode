# Oracle


## Trigger

> 参考：https://blog.csdn.net/gdkyxy2013/article/details/118896816

### 概述

#### 触发器是什么？
数据库触发器是一个与表相关联的，存储的PL/SQL 语句。每当一个特定的数据操作语句（insert update delete）在指定的表上发出时，Oracle自动执行触发器中定义的语句序列。
（当触发条件成立时，其语句就会自动执行）

#### 触发器有什么用？
   保护数据的安全，监视对数据的各种操作，如
   '日志记录': 对重要表的 '修改' 进行记录

#### 触发器和存储过程的区别？
   主要区别：'调用运行方式不同'
   1. 存储过程: '用户'、'应用程序'、'触发器' 来调用
   2. 触发器:   '自动执行'（满足 '触发条件'），与其它无关


### 触发器语法及关键字



举个简单的例子：
当员工表中新增一条记录后，自动打印“成功插入新员工”
```sql
create or replace trigger insertStaffHint
 after insert on xgj_test 
 for each row
declare
 -- local variables here
begin
 dbms_output.put_line('新增员工成功');
end insertStaffHint;
```
<br/>

触发器语法
```sql
CREATE [OR REPLACE] TRIGGER trigger_name
{BEFORE | AFTER }
{INSERT | DELETE | UPDATE [OF column [, column …]]}
[OR {INSERT | DELETE | UPDATE [OF column [, column …]]}...]
ON [schema.]table_name | [schema.]view_name
[REFERENCING {OLD [AS] old | NEW [AS] new| PARENT as parent}]
[FOR EACH ROW ]
[WHEN condition]
PL/SQL_BLOCK | CALL procedure_name;
```

#### BEFORE 和AFTER
指出触发器的触发时序分别为前触发和后触发方式，前触发是在执行触发事件之前触发当前所创建的触发器，后触发是在执行触发事件之后触发当前所创建的触发器。

#### FOR EACH ROW
说明触发器为行触发器。
行触发器和语句触发器的区别表现在：行触发器要求当一个DML语句操走影响数据库中的多行数据时，对于其中的每个数据行，只要它们符合触发约束条件，均激活一次触发器；而语句触发器将整个语句操作作为触发事件，当它符合约束条件时，激活一次触发器。
当省略FOR EACH ROW 选项时，BEFORE 和AFTER 触发器为语句触发器，而INSTEAD OF 触发器则只能为行触发器。

#### REFERENCING
REFERENCING子句说明相关名称，在行触发器的PL/SQL块和WHEN子句中可以使用相关名称参照当前的新、旧列值，默认的相关名称分别为OLD和NEW。触发器的PL/SQL块中应用相关名称时，必须在它们之前加冒号(:)，但在WHEN子句中则不能加冒号。

#### WHEN 
WHEN子句说明触发约束条件。Condition 为一个逻辑表达时，其中必须包含相关名称，而不能包含查询语句，也不能调用PL/SQL 函数。WHEN 子句指定的触发约束条件只能用在BEFORE 和AFTER 行触发器中，不能用在INSTEAD OF 行触发器和其它类型的触发器中。

当一个基表被修改( INSERT, UPDATE, DELETE)时要执行的存储过程，执行时根据其所依附的基表改动而自动触发，因此与应用程序无关，用数据库触发器可以保证数据的一致性和完整性。



### 安全性检查

禁止在非工作时间插入数据
```sql
/**
非工作时间（星球六 星期日， 非9点~18点的区间）
禁止写入数据
 
首先要搞清楚： 触发器的类型--语句级触发器。
不管插入了多少条数据，没有必要对每一行数据都进行校验，只要不在这个时间段内，都不让插入。
*/
create or replace trigger addStafffCheck
 before insert on xgj_test 
 
declare
 -- local variables here
begin
 
 if to_char(sysdate, 'day') in ('星期六', '星期日') or
 to_number(to_char(sysdate, 'hh24')) not between 9 and 18 then
 --禁止insert 
 raise_application_error(-20001,'非工作时间禁止插入数据');
 end if;
end addStafffCheck;
```

raise_application_error用于在plsql使用程序中自定义不正确消息。该异常只在数据库端的子程序（流程、函数、包、触发器）中运用，而无法在匿名块和客户端的子程序中运用。语法为raise_application_error(error_number,message[,[truefalse]])。其中error_number用于定义不正确号，该不正确号必须在-20000到-20999之间的负整数；message用于指定不正确消息，并且该消息的长度无法超过2048字节。

运行结果：

![trigger1](/blog/db/sql/oracle/trigger/trigger1.jpeg)


### 数据确认

涨薪后的工资应该大于涨薪前的工资

```sql
/**
涨后的薪水不能低于涨前的薪水
 
1 :old 和 :new 代表同一条记录
2 :old 代表操作该行之前，这一行的值
 :new 代表操作该行之后，这一行的值
*/
create or replace trigger checkSalary
 before update
 on xgj_test 
 for each row
declare
 -- local variables here 没有变量声明的话，declare可以省略
begin
 
 --- if 涨后的薪水 < 涨前的薪水 then 如何表示呢 ？
 if :new.sal < :old.sal then
 
 raise_application_error(-20002,'涨后的薪水:'|| :new.sal ||'小于涨前的薪水：'||:old.sal);
 end if;
end checkSalary;

```
运行结果：

![trigger2](/blog/db/sql/oracle/trigger/trigger2.jpeg)


### 数据库审计

```sql
create table xgj_record(info varchar2(256)) ;
create or replace trigger addrecord
 after update
 on xgj_test 
 for each row
declare
 -- local variables here
begin
 
 if :new.sal > 6000 then
 insert into xgj_record values(:new.sal ||'-'|| :new.username ||'-'|| :new.job);
 end if;
 
end addrecord;
```
运行结果：

![trigger3](/blog/db/sql/oracle/trigger/trigger3.jpeg)


### 数据的备份和同步
当给员工涨完工资后，自动备份到备份表中
```sql
create table xgj_test_bak as select *　from xgj_test ;
 
create or replace trigger databack
 after update
 on xgj_test
 for each row 
 
begin
 
 update xgj_test_bak set sal = :new.sal where username = :new.username ;
 
end databack;
```
运行结果：

![trigger4](/blog/db/sql/oracle/trigger/trigger4.jpeg)


### 其他

#### 建立一个触发器, 当职工表 emp 表被删除一条记录时，把被删除记录写到职工表删除日志表中去

```sql
CREATE TABLE emp_his AS SELECT * FROM EMP WHERE 1=2;
CREATE OR REPLACE TRIGGER tr_del_emp
 BEFORE DELETE --指定触发时机为删除操作前触发
 ON scott.emp
 FOR EACH ROW --说明创建的是行级触发器
BEGIN
 --将修改前数据插入到日志记录表 del_emp ,以供监督使用。
 INSERT INTO emp_his(deptno , empno, ename , job ,mgr , sal , comm , hiredate )
 VALUES( :old.deptno, :old.empno, :old.ename , :old.job,:old.mgr, :old.sal, :old.comm, :old.hiredate );
END;
DELETE emp WHERE empno=7788;
DROP TABLE emp_his;
DROP TRIGGER del_emp;
```

#### 限定只对部门号为80的记录进行行触发器操作

```sql
CREATE OR REPLACE TRIGGER tr_emp_sal_comm
BEFORE UPDATE OF salary, commission_pct
 OR DELETE
ON HR.employees
FOR EACH ROW
WHEN (old.department_id = 80)
BEGIN
 CASE
 WHEN UPDATING ('salary') THEN
 IF :NEW.salary < :old.salary THEN
 
  RAISE_APPLICATION_ERROR(-20001, '部门80的人员的工资不能降');
 END IF;
 WHEN UPDATING ('commission_pct') THEN
 
 IF :NEW.commission_pct < :old.commission_pct THEN
  RAISE_APPLICATION_ERROR(-20002, '部门80的人员的奖金不能降');
 END IF;
 WHEN DELETING THEN
  RAISE_APPLICATION_ERROR(-20003, '不能删除部门80的人员记录');
 END CASE;
END;
```

#### 级联更新
在修改了主表regions中的region_id之后（AFTER），级联的、自动的更新子表countries表中原来在该地区的国家的region_id。

```sql
CREATE OR REPLACE TRIGGER tr_reg_cou
AFTER update OF region_id
ON regions
FOR EACH ROW
BEGIN
 DBMS_OUTPUT.PUT_LINE('旧的region_id值是'||:old.region_id
   ||'、新的region_id值是'||:new.region_id);
 UPDATE countries SET region_id = :new.region_id
 WHERE region_id = :old.region_id;
END;
```

#### 触发器中调用过程

```sql
CREATE OR REPLACE PROCEDURE add_job_history
 ( p_emp_id  job_history.employee_id%type
 , p_start_date job_history.start_date%type
 , p_end_date job_history.end_date%type
 , p_job_id  job_history.job_id%type
 , p_department_id job_history.department_id%type
 )
IS
BEGIN
 INSERT INTO job_history (employee_id, start_date, end_date,
    job_id, department_id)
 VALUES(p_emp_id, p_start_date, p_end_date, p_job_id, p_department_id);
END add_job_history;
 
--创建触发器调用存储过程...
CREATE OR REPLACE TRIGGER update_job_history
 AFTER UPDATE OF job_id, department_id ON employees
 FOR EACH ROW
BEGIN
 add_job_history(:old.employee_id, :old.hire_date, sysdate,
   :old.job_id, :old.department_id);
END;
```