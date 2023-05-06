#   Monitor-AWS (𝐃𝐞𝐩𝐥𝐨𝐲 𝐦𝐨𝐧𝐢𝐭𝐨𝐫 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐤𝐮𝐛𝐞𝐫𝐧𝐞𝐭𝐞𝐬)
 
 
 
# 𝐖𝐡𝐚𝐭 𝐲𝐨𝐮 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐥𝐞𝐚𝐫𝐧 𝐭𝐡𝐢𝐬 𝐮𝐬𝐞𝐜𝐚𝐬𝐞 :

Application Deployment, also known as Software Deployment, is the process of installing, configuring, updating, and enabling one application or suite of applications that make a software system available for use, like facilitating a certain URL on a server.

This Devops project and add it to your Resume, in this realtime devops project we will devops tools like AWS, Python, Docker, Kubernetes and more.

# 𝐀𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞
![Watch the image](/aws/Usecase8/Deployment.png)

# 𝐏𝐫𝐞𝐫𝐞𝐪𝐮𝐢𝐬𝐢𝐭𝐞𝐬
  - AWS Account
  - Programmatic access and AWS configurattion with CLI
  - Python3 installed 
  - Docker and kubernetes envionmentes ready
  - Code Editor ( visual studio code ) 

Just chcek connection 

    aws configure  ( Enter access key information )
    aws s3 ls  ( just for validation)
    
Python3 chcekup
    python3 --version
    
    C:\Users\Dell\AppData\Local\Programs\Python\Python38-32>python --version
    Python 3.8.10
 
 Check the docker version
    docker --version
    
 Kubernetes checkups
    kubectl get nodes
    kubectl version
 
# Steps

- Step 1 :  How to create Python Monitoring Application using Flask from scratch.
- Step 2 : How to run the Python application localhost with port
- Step 3 : How to containerize the application using Docker
- Step 4 : How to write Dockerfile
- Step 5 : How to build Docker image from Dockerfile
- Step 6 : Run the Docker and validate
- Step 7 : Create the ECR repo and Push the Image
- Step 8 : Prepare the kubernetes Envionment
- Step 9 : How  to create Kubernetes Deployments and service 
- Step 10 : Access the application from internet


# Step 1 :  How to create Python Monitoring Application using Flask from scratch

    Please use below code
      
      
  
 

#  step2: convert server to image

  a. stop the server
  
  b. action --> image and template -->create image 
	 image name ( deployment-image ) --> no reboot enable --> create image (remaindefault)
	
  c. go to ami and chcek the image 

# step3: create load balancer

create loadbalncer -->application loadbalncer --> create --> name(deploy-loadbalncer) --> select minimum two regions --> select security group --> select target group ( if you not created please use default config and create)--> create loadbalncer

      
# step 4:change target group settings

loadbalncer --> target groups --> target group name --> attributes --> edit -->
	update 60 sec --> save changes

# step5: create auto scaling &  launch configuarion.

Launch configuarion:
	
Launch configuarion --> create launch configuration -->name --> select AMI --> choose basic instance type (t2 micro)--> select security group ( this security group we careated ealier you have select stick always one SG) 
		-->key pair -->create launch configuarion
		
Once launch configuration completed then we can create security group
	
Autoscaling group :
		
  Autoscaling group --> auto scaling group name --> select launch template -->next --> default vpc --> select AZ all three --> attached loadbalncer --> select loadbalncer -->select ELB --> 1500 sec --> select -->desired/min/max =2 --> remain default --> create autoscaling group 
		
Once auto scaling creation completed . its will automatclly create 2 ec2 instance

# step6: create deployment group

create code pipeline --> deploy --> application --> create deployment group -->  name --> role --> select in-place --> select EC2autoscaling -->  deployment setting select all at time --> select loadbalncer --> create deployment group

# step7: Update the pipeline ( if you are not create then create new pipleine already discussed ealier usecase)
  
  Edit pipeline --> update deploy area --> save
	then release the pipeline 
 # step8: Hot deployment
  
  modify the code and reploy using of code commit 
	git add .
	git commit -m "hot deploy"
	git push origin master
# step9: Rolling deployment
  
  a. edit the autoscale deployment capacity from 2 to 3.
	b. Go to deployment group --> deployment setting --> deplymentoneatatime -->  unchcek disable rollback --> save 
	c. change the code and repush 
	
you are oberved changed will happen one after another servers
# step10: update the code wrongly and check the functionality of rolling deployment.
  
  code pipeline --> deployment --> deployment history 
	once deployment failed automatically rollback old version but application level nothing impacted
  
# step11: Blue-Green Deployment 
  
  application --> deployment group --> edit --> deployment type --> blue/green --> deployment setting --> traffic rerouting (reroute traffic immeditally) & (terrimate the original instance in deployment group) --> deployment configuration (code deployment at a time) --> save

Update the code and redeploy 
	
Then automically number of double number of instance will created then slowly count will comeback normal.

