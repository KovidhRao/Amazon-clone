# LAB 6: Application Development & Deployment Using GitHub, Jenkins, Docker, and Kubernetes

**Course**: Application Development and Deployment Architecture  
**Project**: Responsive Amazon Clone E-Commerce Web Application

---

## 1. System Architecture & CI/CD Workflow

```
[Developer / VS Code]
         │
         ▼ (git push)
    [ GitHub ]
         │
         ▼ (Webhook / SCM Poll)
    [ Jenkins CI/CD Pipeline ]
         │
         ├─► Step 1: Source Code Checkout
         ├─► Step 2: Static Code Integrity Check
         ├─► Step 3: Build Docker Image (`docker build -t amazon-clone:latest .`)
         ├─► Step 4: Container Smoke Test (`docker run -d ...`)
         ├─► Step 5: Kubernetes Deployment (`kubectl apply -f k8s/`)
         └─► Step 6: Verify Rollout & Self-Healing Pods
                     │
                     ▼
             [ Kubernetes Cluster ]
       ┌──────────────────────────────┐
       │ Service: NodePort (30080)   │
       └──────────────┬───────────────┘
                      │ (Load Balances Traffic)
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
   [Pod Replica 1] [Pod Replica 2] [Pod Replica 3]
```

---

## 2. Directory Structure

```
amazo clone/
├── amazon.html             # Main storefront HTML page with embedded styles
├── amazon-cont.css         # Amazon design system styling
├── amazon.js               # Dynamic storefront logic (Cart, Search, Modals, Checkout)
├── index.html              # Root redirect entrypoint
├── login.html              # Authenticated Amazon Sign-In page
├── login.css               # Sign-In page styling
├── Dockerfile              # Docker container configuration (Nginx Alpine)
├── .dockerignore           # Excluded files during container build
├── Jenkinsfile             # Jenkins CI/CD Declarative Pipeline
├── k8s/
│   ├── deployment.yaml     # Kubernetes Deployment (3 Replicas, Health Probes)
│   └── service.yaml        # Kubernetes NodePort Service (Exposes Port 30080)
├── .gitignore              # Git ignore rules
└── *.jpg                   # Product assets (Audio, Appliances, Banners, Tools)
```

---

## 3. Step-by-Step Execution Guide

### STEP 1: Version Control with Git & GitHub
1. Initialize Git repository and commit code:
   ```powershell
   git init -b main
   git add .
   git commit -m "feat: complete amazon clone with docker, k8s, and jenkins"
   ```
2. Create a new repository on [GitHub](https://github.com/new) named `amazon-clone`.
3. Link and push to GitHub:
   ```powershell
   git remote add origin https://github.com/<your-username>/amazon-clone.git
   git push -u origin main
   ```

---

### STEP 2: Containerization with Docker
1. Start **Docker Desktop** on Windows.
2. Build the Docker container image:
   ```powershell
   docker build -t amazon-clone:latest .
   ```
3. Run the container locally:
   ```powershell
   docker run -d -p 8080:80 --name my-amazon-app amazon-clone:latest
   ```
4. Test in browser: [http://localhost:8080](http://localhost:8080)
5. Stop container:
   ```powershell
   docker stop my-amazon-app
   docker rm my-amazon-app
   ```

---

### STEP 3: Kubernetes Deployment & Scaling
1. In Docker Desktop, go to **Settings > Kubernetes** and check **Enable Kubernetes**, then click **Apply & Restart**.
2. Apply the deployment and service manifests:
   ```powershell
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```
3. Verify running Pods and Service:
   ```powershell
   kubectl get pods -l app=amazon-clone
   kubectl get svc amazon-clone-service
   ```
4. Access the application on Kubernetes:
   - URL: [http://localhost:30080](http://localhost:30080)
5. Test Kubernetes Self-Healing:
   - Delete one pod: `kubectl delete pod <pod-name>`
   - Watch Kubernetes instantly spawn a new replica to maintain 3 healthy pods!
6. Scale up to 5 replicas dynamically:
   ```powershell
   kubectl scale deployment amazon-clone-deployment --replicas=5
   kubectl get pods
   ```

---

### STEP 4: Automated CI/CD with Jenkins
1. Open Jenkins at [http://localhost:8080](http://localhost:8080).
2. Click **New Item** > Enter **`amazon-clone-pipeline`** > Select **Pipeline** > Click **OK**.
3. Under **Pipeline Definition**, select **Pipeline script from SCM**:
   - SCM: **Git**
   - Repository URL: `https://github.com/<your-username>/amazon-clone.git`
   - Branch: `*/main`
   - Script Path: `Jenkinsfile`
4. Click **Save** and then click **Build Now**.
5. Watch all 6 automated pipeline stages execute successfully!
