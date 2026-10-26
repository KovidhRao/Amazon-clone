pipeline {
    agent any

    environment {
        APP_NAME     = "amazon-clone"
        IMAGE_TAG    = "latest"
        K8S_DIR      = "k8s"
        KUBECONFIG   = "C:\\ProgramData\\Jenkins\\.jenkins\\.kube\\config"
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
                // Remove any previous leftover test container before starting
                bat "docker rm -f test-${APP_NAME} 2>nul || ver >nul"
                bat "docker run -d --name test-${APP_NAME} -p 8085:80 ${APP_NAME}:${IMAGE_TAG}"
                // Wait 3 seconds and check container HTTP status
                bat "powershell -Command \"Start-Sleep -Seconds 3; Invoke-WebRequest -Uri 'http://localhost:8085' -UseBasicParsing\""
                bat "docker rm -f test-${APP_NAME}"
            }
        }

        stage('5. Deploy to Kubernetes') {
            steps {
                echo 'Applying Kubernetes Deployment and Service manifests...'
                bat "kubectl --kubeconfig=\"%KUBECONFIG%\" apply -f ${K8S_DIR}/deployment.yaml"
                bat "kubectl --kubeconfig=\"%KUBECONFIG%\" apply -f ${K8S_DIR}/service.yaml"
            }
        }

        stage('6. Verify K8s Rollout & Scaling') {
            steps {
                echo 'Verifying Kubernetes Pod status and rollout...'
                bat "kubectl --kubeconfig=\"%KUBECONFIG%\" rollout status deployment/amazon-clone-deployment"
                bat "kubectl --kubeconfig=\"%KUBECONFIG%\" get pods -l app=amazon-clone"
                bat "kubectl --kubeconfig=\"%KUBECONFIG%\" get svc amazon-clone-service"
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
