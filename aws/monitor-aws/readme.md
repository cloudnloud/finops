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

- Step 1 : How to create Python Monitoring Application using Flask from scratch.
- Step 2 : How to run the Python application localhost with port
- Step 3 : How to containerize the application using Docker
- Step 4 : How to write Dockerfile
- Step 5 : How to build Docker image from Dockerfile
- Step 6 : Run the Docker and validate
- Step 7 : Create the ECR repo and Push the Image
- Step 8 : Prepare the kubernetes Envionment
- Step 9 : How  to create Kubernetes Deployments and service 
- Step 10 : Access the application from internet


# 𝐒𝐭𝐞𝐩 𝟏 :  𝐇𝐨𝐰 𝐭𝐨 𝐜𝐫𝐞𝐚𝐭𝐞 𝐏𝐲𝐭𝐡𝐨𝐧 𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐮𝐬𝐢𝐧𝐠 𝐅𝐥𝐚𝐬𝐤 𝐟𝐫𝐨𝐦 𝐬𝐜𝐫𝐚𝐭𝐜𝐡

C:\Users\Dell\AppData\Local\Programs\Python\Python38-32\python.exe -m pip install psutil 

C:\Users\Dell\AppData\Local\Programs\Python\Python38-32\python.exe -m pip install flask

 py app.py

Please use below code
	import psutil
	from flask import Flask, render_template

	app = Flask(__name__)

	@app.route("/")
	def index():
 		cpu_metric = psutil.cpu_percent()
   		mem_metric = psutil.virtual_memory().percent
		Message = None
		if cpu_metric > 80 or mem_metric > 80:
       	 		Message = "High CPU or Memory Detected, scale up!!!"
   		return render_template("index.html", cpu_metric=cpu_metric, mem_metric=mem_metric, message=Message)

	if __name__=='__main__':
   		app.run(debug=True, host = '0.0.0.0')    	

      
      
  
 #   𝐜𝐫𝐞𝐚𝐭𝐞 𝐟𝐨𝐥𝐝𝐞𝐫 𝐭𝐞𝐦𝐩𝐥𝐚𝐭𝐞𝐬 /𝐢𝐧𝐝𝐞𝐱.𝐡𝐭𝐦𝐥
	<!DOCTYPE html>
	<html>
	<head>
	    <title>System Monitoring</title>
	    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
	    <style>
		.plotly-graph-div {
		    margin: auto;
		    width: 50%;
		    background-color: rgba(151, 128, 128, 0.688);
		    padding: 20px;
		}
	    </style>
	</head>
	<body>
	    <div class="container">
		<h1>System Monitoring</h1>
		<div id="cpu-gauge"></div>
		<div id="mem-gauge"></div>
		{% if message %}
		<div class="alert alert-danger">{{ message }}</div>
		{% endif %}
	    </div>
	    <script>
		var cpuGauge = {
		    type: "indicator",
		    mode: "gauge+number",
		    value: {{ cpu_metric }},
		    gauge: {
			axis: { range: [null, 100] },
			bar: { color: "#1f77b4" },
			bgcolor: "white",
			borderwidth: 2,
			bordercolor: "#ccc",
			steps: [
			    { range: [0, 50], color: "#d9f0a3" },
			    { range: [50, 85], color: "#ffeb84" },
			    { range: [85, 100], color: "#ff5f5f" }
			],
			threshold: {
			    line: { color: "red", width: 4 },
			    thickness: 0.75,
			    value: {{ cpu_metric }}
			}
		    }
		};

		var memGauge = {
		    type: "indicator",
		    mode: "gauge+number",
		    value: {{ mem_metric }},
		    gauge: {
			axis: { range: [null, 100] },
			bar: { color: "#1f77b4" },
			bgcolor: "white",
			borderwidth: 2,
			bordercolor: "#ccc",
			steps: [
			    { range: [0, 50], color: "#d9f0a3" },
			    { range: [50, 85], color: "#ffeb84" },
			    { range: [85, 100], color: "#ff5f5f" }
			],
			threshold: {
			    line: { color: "red", width: 4 },
			    thickness: 0.75,
			    value: {{ mem_metric }}
			}
		    }
		};

		var cpuGaugeLayout = { title: "CPU Utilization" };
		var memGaugeLayout = { title: "Memory Utilization" };

		Plotly.newPlot('cpu-gauge', [cpuGauge], cpuGaugeLayout);
		Plotly.newPlot('mem-gauge', [memGauge], memGaugeLayout);
	    </script>
	</body>
	</html>
	
![Watch the image](/aws/monitor-aws/1.0.PNG)
	
# 𝐒𝐭𝐞𝐩 𝟐 : 𝐇𝐨𝐰 𝐭𝐨 𝐫𝐮𝐧 𝐭𝐡𝐞 𝐏𝐲𝐭𝐡𝐨𝐧 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐥𝐨𝐜𝐚𝐥𝐡𝐨𝐬𝐭 𝐰𝐢𝐭𝐡 𝐩𝐨𝐫𝐭
	
	py app.py
![Watch the image](/aws/monitor-aws/1.PNG)

𝐒𝐭𝐞𝐩 𝟑 : 𝐇𝐨𝐰 𝐭𝐨 𝐜𝐨𝐧𝐭𝐚𝐢𝐧𝐞𝐫𝐢𝐳𝐞 𝐭𝐡𝐞 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐮𝐬𝐢𝐧𝐠 𝐃𝐨𝐜𝐤𝐞𝐫

a. login the docker server 
b. chcek docker running or not
	docker ps -a
c.  create docker image

𝐒𝐭𝐞𝐩 𝟒 : 𝐇𝐨𝐰 𝐭𝐨 𝐰𝐫𝐢𝐭𝐞 𝐃𝐨𝐜𝐤𝐞𝐫𝐟𝐢𝐥𝐞

Dockerfile

	FROM python:3.9-buster

	WORKDIR /app

	COPY requirements.txt .

	RUN pip3 install --no-cache-dir -r requirements.txt

	COPY . .

	ENV FLASK_RUN_HOST=0.0.0.0

	EXPOSE 5000

	CMD ["flask", "run"]

requirements.txt

	Flask==2.2.3
	MarkupSafe==2.1.2
	Werkzeug==2.2.3
	itsdangerous==2.1.2
	psutil==5.8.0
	plotly==5.5.0
	tenacity==8.0.1
	boto3==1.9.148
	kubernetes==10.0.1

𝐅𝐨𝐥𝐝𝐞𝐫 𝐒𝐭𝐫𝐮𝐭𝐮𝐫𝐞

![Watch the image](/aws/monitor-aws/2.PNG)

𝐒𝐭𝐞𝐩 𝟓 : 𝐇𝐨𝐰 𝐭𝐨 𝐛𝐮𝐢𝐥𝐝 𝐃𝐨𝐜𝐤𝐞𝐫 𝐢𝐦𝐚𝐠𝐞 𝐟𝐫𝐨𝐦 𝐃𝐨𝐜𝐤𝐞𝐫𝐟𝐢𝐥𝐞

	docker build -t montor-image .
	
![Watch the image](/aws/monitor-aws/3.png)

𝐒𝐭𝐞𝐩 𝟔 : 𝐑𝐮𝐧 𝐭𝐡𝐞 𝐃𝐨𝐜𝐤𝐞𝐫 𝐚𝐧𝐝 𝐯𝐚𝐥𝐢𝐝𝐚𝐭𝐞

![Watch the image](/aws/monitor-aws/4.png)

	docker run -p 5000:5000 montor-image
	
𝐒𝐭𝐞𝐩 𝟕 : 𝐂𝐫𝐞𝐚𝐭𝐞 𝐭𝐡𝐞 𝐄𝐂𝐑 𝐫𝐞𝐩𝐨 𝐚𝐧𝐝 𝐏𝐮𝐬𝐡 𝐭𝐡𝐞 𝐈𝐦𝐚𝐠𝐞

![Watch the image](/aws/monitor-aws/5.png)

Then follow the instructure

![Watch the image](/aws/monitor-aws/6.png)


𝐒𝐭𝐞𝐩 𝟖 : 𝐏𝐫𝐞𝐩𝐚𝐫𝐞 𝐭𝐡𝐞 𝐤𝐮𝐛𝐞𝐫𝐧𝐞𝐭𝐞𝐬 𝐄𝐧𝐯𝐢𝐨𝐧𝐦𝐞𝐧𝐭

Follow the attached document

Open the all port on both master and node before enter the joint command

![Watch the image](/aws/monitor-aws/7.png)

𝐒𝐭𝐞𝐩 𝟗 : 𝐇𝐨𝐰  𝐭𝐨 𝐜𝐫𝐞𝐚𝐭𝐞 𝐊𝐮𝐛𝐞𝐫𝐧𝐞𝐭𝐞𝐬 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭𝐬 𝐚𝐧𝐝 𝐬𝐞𝐫𝐯𝐢𝐜𝐞 

Deployment :

root@ip-172-31-84-83:~/files# more 𝐝𝐞𝐩.𝐲𝐚𝐦𝐥
		apiVersion: apps/v1
		kind: Deployment
		metadata:
		  name: monitor-python
		  labels:
		    app: monitor
		spec:
		  replicas: 1
		  selector:
		    matchLabels:
		      app: monitor
		  template:
		    metadata:
		      labels:
			app: monitor
		    spec:
		      containers:
		      - name: monitor
			image: 261995165444.dkr.ecr.us-east-1.amazonaws.com/my_monitoring_app_image:latest
			ports:
			- containerPort: 5000
root@ip-172-31-84-83:~/files# more 𝐬𝐞𝐫.𝐲𝐚𝐦𝐥
		apiVersion: v1
		kind: Service
		metadata:
		  name: python-service
		spec:
		  type: NodePort
		  selector:
		    app: monitor
		  ports:
		      # By default and for convenience, the `targetPort` is set to the same value as the `port` field.
		    - port: 5000
		      targetPort: 5000

![Watch the image](/aws/monitor-aws/8.png)

𝐒𝐭𝐞𝐩 𝟏𝟎 : 𝐀𝐜𝐜𝐞𝐬𝐬 𝐭𝐡𝐞 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐟𝐫𝐨𝐦 𝐢𝐧𝐭𝐞𝐫𝐧𝐞𝐭

Take master ip or server ip with nodeport  number

ex: http://34.201.50.33:32340/

![Watch the image](/aws/monitor-aws/9.png)

  
