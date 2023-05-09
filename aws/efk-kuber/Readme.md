# 𝐀𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞
![Watch the image](/aws/efk-kuber/EFK-Usecase.PNG)


# Steps
# Step 1: Create kubernets environment using of kuber_install document
  open the all ports both node level and master level
# Step 2: check git installed or not 
  once git installed just clone EFK repository ( attached all files )
# Step 3: Change the values
  Once cloned if you are using kubernets single node 
   --> change kibana replicas: 1
   --> change service type (07 files) Loadbalance to NodePort
 # Step 4: Run the yaml files
    Just run go to yaml file location 
      kubectl apply -f .
 # Step 5: wait untill kibana up
    Total three(kibana,elastic,fluentd) all deployment,static ,pods,service ( if you change replicas value 1 then 3 other wise count will increase)
    wait untill kubernets up
 # Step 6: Kibana dashboard
    Once kibana up go to --> discover --> index --> first enter * --> selecet @timestamp --> create index
 # Step 7: Dash board log testing
    Go to kubernets server and run 
    kubectl run nginx --image=nginx 
    it will get the error bez 8080 already listing ( If you check the logs it will displayed)
    kubectl run nginx1 --image=nginx --port=8082 ( now it wil run just chcek dashboard logs)

63,64,65
Ref: https://tcsglobal.udemy.com/course/production-ready-kubernetes-setup-for-cicd-devops-project/learn/lecture/30318392#reviews
