[TOC]

# git 说明

简单操作就是这样子。
初始化好像比以前简单多了。
只要下载了git windows客户端，不需要配置什么密钥什么的，只需要登陆就可以了。
说明帖子在这里：

http://www.jianshu.com/p/dcbb8baa6e36
http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137396287703354d8c6c01c904c7d9ff056ae23da865a000

    初始化一个本地Git仓库(把本地的文件夹初始化成一个Git可以管理的版本库)

    git init

    注意:需让命令行终端处在当前文件目录下

    把文件添加到本地版本库

    git add 文件名

    把文件修改提交到仓库

    git commit -m "注释"

    关联一个远程仓库

    git remote add origin git@github.com:YotrolZ/helloTest.git

    将最新的修改推送到远程仓库

    git push -u origin master

        注意:
        1.每次push前要先进行git add 文件名 和 git commit -m "注释"
        2.在第一次进行push时,我们加上-u参数,后期push时就不用再加-u参数


    git push origin --tags
    git tag 名字
    
    