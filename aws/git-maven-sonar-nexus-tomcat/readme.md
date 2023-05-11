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
       
      # add credentials 
        
           Manage Jenkins --> credentails --> click on Domain -->Add  credential -->  
           
           a. #Sonar#:
              Go to sonar gui --> Click on my account --> Security --> give token name --> genderate token and save
              In credentail --> select Kind as --> Secret Text --> Secret name( copy and paste sonar token) --> ID sona_cren --> description Sonar_cren
            b. #TomcatSSH#
                Go to tomcat server 
                useradd sreeadmin
                passwd sreeadmin
                newpassword *****
                 confirmagain *****
                
                go to /etc/ssh/sshd_config
                PermitRootLogin yes
                 PasswordAuthentication yes
                 
                 visudo 
                 sreeadmin ALL=(ALL)       NOPASSWD: ALL
                 
                 restart the server 
               
               su - sreeadmin 
                ssh-keygen
               
               exchange keys between jenkins server( root user) to tomcat server( sreeadmin)
               
                go to jenkins server --> ssh-copy-id -i ~/.ssh/id_rsa.pub sreeadmin@host ( finally comunication need to happen with out password from jenkins to tomcat)
                Go  to Jenkins server --> open id_rsa
                
                In credentail --> select Kind as --> ssh username with privatekey -->ID (name), Username (sreeadmin) -- select priatekey --> add (id_rsa info)  --> crete 
                
         Ref: https://www.youtube.com/watch?v=qJ8gUp0O25k      
                
            c.#Nexus#
              Kind --> username & password --> username admin --> password (what password you given mostly admin)
    
      # Sonarqube ,SSH
          1. Manage Jenkins --> Manage Plugns --> Install ( sonarqube , publish ssh ) plugin 
          2. Manage Jenkins --> configure system --> SonarQube installations --> ADD ( Name , URL, Credential)
          
          ![Watch the image](/aws/efk-kuber/sonar.PNG)
          
              Manage Jenkins --> configure system --> publish overssh --> add ( Name,Hostname(serverIP),Username,credentail)
              
          ![Watch the image](/aws/efk-kuber/ssh1.PNG)
       
       # Maven info update
         3. Manage Jenkins --> Global Tool Configuration --> Maven
         
         ![Watch the image](/aws/efk-kuber/maven1.PNG)
         
  # Step 7: Create Pipeline job 
    
    New item --> Pipeline(name :newbuild ) -->  go to pipeline 
    
        node{
    
    stage('clone rep'){
        git 'https://github.com/sree1786/maven-web-app.git'
        
    }
    
    stage('Maven Build'){
        def mavenHome = tool name: "Maven-3.8.6", type:"maven"
        def mavenCMD = "${mavenHome}/bin/mvn"
        sh "${mavenCMD} clean package"
    }
    
    stage('sonarscan'){
        withSonarQubeEnv('sonarqube'){
            def mavenHome = tool name: "Maven-3.8.6", type:"maven"
            def mavenCMD = "${mavenHome}/bin/mvn"
            sh "${mavenCMD} sonar:sonar"
            
            
            
        }
        
    }
    stage('artifacts-nexus'){
        nexusArtifactUploader artifacts: [[artifactId: '01-maven-web-app', classifier: '', file: 'target/01-maven-web-app.war', type: 'war']], credentialsId: 'nexus', groupId: 'sreegroup', nexusUrl: '52.91.170.16:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'sree-snapshot-Repo', version: '1.0-SNAPSHOT'
        
    }
    
    sshagent(['tomcat-key']) {
        sh 'scp -o StrictHostKeyChecking=no target/01-maven-web-app.war sreeadmin@52.70.144.165:/opt/tomcat1/apache-tomcat-9.0.74/webapps'
      }
    }
   
 
 Try  one after another in node pipe and keep on test like below
 1. Git
 
        node{
   
          stage('clone rep'){
   
            git 'https://github.com/sree1786/maven-web-app.git'
    
          }
        }
    
 2. Git + Maven 
  
        node{
      
          stage('clone rep'){
        
            git 'https://github.com/sree1786/maven-web-app.git'
          
            }
          
          stage('Maven Build'){
        
            def mavenHome = tool name: "Maven-3.8.6", type:"maven"
          
            def mavenCMD = "${mavenHome}/bin/mvn"
          
            sh "${mavenCMD} clean package"
          
          }
        
        }
 3. Git + Maven + sonar
 
 
        
        node{

          stage('clone rep'){

              git 'https://github.com/sree1786/maven-web-app.git'

              }
          stage('Maven Build'){
              def mavenHome = tool name: "Maven-3.8.6", type:"maven"
              def mavenCMD = "${mavenHome}/bin/mvn"
              sh "${mavenCMD} clean package"
             }
          stage('sonarscan'){
                withSonarQubeEnv('sonarqube'){
                      def mavenHome = tool name: "Maven-3.8.6", type:"maven"
                      def mavenCMD = "${mavenHome}/bin/mvn"
                      sh "${mavenCMD} sonar:sonar"
                  }
        
            }

        }
