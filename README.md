# Portfolio
Welcome to the GitHub repository for my personal portfolio website! This site showcases my projects, skills, and professional journey as a software engineer. 

## **Table of Contents**

- [**Getting Started**](#getting-started)
- [**Technologies Used**](#technologies-used)
- [**About**](#about)
- [**Projects**](#projects)
- [**Skills**](#skills)
- [**Contact**](#contact)
- [**CI/CD Pipeline with Docker and GitHub Actions**](#cicd-pipeline-with-docker-and-github-actions)

## **Getting Started**

To view the portfolio locally on your machine, follow these steps:

```bash
git clone https://github.com/ljohr/portfolio.git
cd portfolio
npm install
npm run dev
```

## **Technologies Used**
- HTML/CSS
- React
- TypeScript
- Next.js
- Docker

## **About**

The **About** section offers a glimpse into my personal journey and motivations as a developer. It highlights my background, professional interests, and what drives me to pursue excellence in the field of software development.

## **Projects**

This portfolio features a selection of projects that demonstrate my full-stack development capabilities and my proficiency in systems programming with C. Each project is designed to showcase different skills and approaches to software development. 


## **Skills**

This section outlines the technical skills and tools I've worked with. It includes programming languages, frameworks, libraries, and other technologies I use to bring my projects to life.

## **Contact**

The **Contact** section provides ways to reach out to me. Whether you're interested in collaborating on a project or just want to say hi, you'll find the information you need to get in touch.

## **CI/CD Pipeline with Docker and GitHub Actions**
This repository features a CI/CD pipeline that automates the deployment process for changes to the main branch. The pipeline builds a Docker image from the latest code and pushes it to Docker Hub. Once the image is available, the pipeline deletes the existing Docker container and replaces it with a new one based on the updated image. Finally, the GitHub Actions runner on my AWS EC2 instance deploys the updated website, ensuring smooth, automated updates.
