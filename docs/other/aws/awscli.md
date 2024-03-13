# AWS CLI

## 命令

### aws --version

aws-cli/2.10.3 Python/3.9.11 Windows/10 exe/AMD64 prompt/off

### aws configure

配置 Id 和 Access key 

![awscli1](/blog/other/aws/awscli1.jpg)

### aws iam list-users

查看所有User

![awscli2](/blog/other/aws/awscli2.jpg)

### 连接instance

ssh -i "C:\Users\tang1\Desktop\AWS\EC2 Tutorial.pem" ec2-user@54.169.200.225


### 压力
sudo amazon-linux-extras install epel -y
sudo yum install stress -y
stress -c 4