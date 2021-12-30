## 表说明

``` 
用户相关

用户表 User
用户信息表 UserInfo
用户地址表 UserAddr
团队表 Team
团队信息表 TeamInfo
团队管理员表 TeamAdmin
团队成员表 TeamMember
团队商品表 TeamGoods
团队商品兑换表 GoodsConvert


活动
团队活动 TeamActivity
活动参与人员 ActivityMember

用户表 1:1 用户信息表
用户表 1:N 用户地址表
团队表 1:1 团队信息表

团队表 1:N 团队管理员表 N:1用户表 
团队表 1:N 团队成员表 N:1 用户表 
团队表 1:N 团队活动 1:1 活动参与人员 N:1 用户表 
团队表 1:N 团队商品表 1:N 团队商品兑换表 N:1 团队成员表 
```