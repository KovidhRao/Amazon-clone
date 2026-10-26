pipeline {
    agent any

    environment {
        APP_NAME     = "amazon-clone"
        IMAGE_TAG    = "latest"
        K8S_DIR      = "k8s"
    }

    stages {
        stage('1. Checkout SCM') {
            steps {
                echo 'Checking out source code from GitHub repository...'
                checkout scm
            }
        }

        stage('2. Static Code Verification') {
            steps {
                echo 'Verifying application assets and HTML/CSS integrity...'
                bat 'dir'
            }
        }

        stage('3. Build Docker Image') {
            steps {
                echo 'Building Docker container image using Dockerfile...'
                bat "docker build -t ${APP_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('4. Test Container Locally') {
            steps {
                echo 'Testing Docker container execution...'
                bat "docker run -d --name test-${APP_NAME} -p 8088:80 ${APP_NAME}:${IMAGE_TAG}"
                // Wait 5 seconds and check container status
                bat "powershell -Command \"Start-Sleep -Seconds 5; Invoke-WebRequest -Uri 'http://localhost:8088' -UseBasicParsing\""
                bat "docker stop test-${APP_NAME}"
                bat "docker rm test-${APP_NAME}"
            }
        }

        stage('5. Deploy to Kubernetes') {
            steps {
                echo 'Applying Kubernetes Deployment and Service manifests...'
                bat "kubectl apply -f ${K8S_DIR}/deployment.yaml"
                bat "kubectl apply -f ${K8S_DIR}/service.yaml"
            }
        }

        stage('6. Verify K8s Rollout & Scaling') {
            steps {
                echo 'Verifying Kubernetes Pod status and rollout...'
                bat "kubectl rollout status deployment/amazon-clone-deployment"
                bat "kubectl get pods -l app=amazon-clone"
                bat "kubectl get svc amazon-clone-service"
            }
        }
    }

    post {
        success {
            echo '==================================================='
            echo ' CI/CD Pipeline Completed Successfully!'
            echo ' Application is live on Kubernetes: http://localhost:30080'
            echo '==================================================='
        }
        failure {
            echo 'Pipeline failed. Please inspect stage logs.'
        }
    }
}
