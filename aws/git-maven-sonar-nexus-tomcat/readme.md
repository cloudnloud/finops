# Steps 
# step 1: Get the git project
  Get the maven project git location : https://github.com/sree1786/maven-web-app.git
                                              or
                                              https://github.com/veejee2331/webapplication.git
# step 2: install jenkins on linux server
      https://github.com/sree1786/jenkins_install/blob/masterfault  ( installed git this server)
# step 3: install sonar qube on linux server ( minimum t3.medium server)
    https://github.com/sree1786/jenkins_install/tree/master/sonarqubeinstall  ( untill step 17 enough)
# step 4: install nexus on linux server ( minimum t3.medium server)
    https://github.com/sree1786/jenkins_install/blob/master/nexus-artifactory-install  ( login inside of nexus username: admin password:(chcek in login area))
# step 5: Install configure tomcat 
    https://github.com/sree1786/jenkins_install/blob/master/Tomcat%20installtion

# Step6 :  Open Jenkins GUI and  configuration sonarqube,maven and ssh 
      
      # Sonarqube ,SSH
          1. Manage Jenkins --> Manage Plugns --> Install ( sonarqube , publish ssh ) plugin 
          2. Manage Jenkins --> configure system --> SonarQube installations --> ADD ( Name , URL, Credential)
          
                                                  --> publish overssh --> add ( Name,Hostname(serverIP),Username,credentail)
                                                  
  
        
