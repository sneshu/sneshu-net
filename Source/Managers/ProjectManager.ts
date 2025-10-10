//
// File: ProjectManager.ts
// Description: Manager of portfolio projects generated from the data inside constructor.
//
// Copyright (c) 2025 Sneshu. All rights reserved.
// Unauthorized copying or use of this code is prohibited.
//

export class ProjectManager
{
    private container: HTMLDivElement;
    private data: Array<ProjectData>;

    constructor()
    {
        this.container = document.querySelector("#projects")!;
        this.data = [
            new ProjectData({ codename: "Glitch", image: "T_Glitch_Background", language: "ts", repository: "sneshu/glitch", href: "/glitch" }),
            new ProjectData({ codename: "Voxadion", language: "cpp", steam: "." }),
            new ProjectData({ codename: "RotMG Toolset", image: "T_RotMG_Toolset_Background", language: "ts", repository: "sneshu/rotmg-toolset", engine: "pixijs" }),
        ];
    }

    public createProjects(): void
    {
        this.data.forEach(project => 
        {
            const anchorElement = document.createElement(`a`);
            anchorElement.className = `project`;

            if (project.href)
            {
                anchorElement.href = project.href;
                anchorElement.target = `_blank`;
            }

            else
            {
                const unreleasedElement = document.createElement(`div`);
                unreleasedElement.className = `unreleased`;
                anchorElement.append(unreleasedElement);
            }

            const codenameElement = document.createElement(`div`);
            codenameElement.className = `codename`;
            codenameElement.innerHTML = project.codename;
            anchorElement.append(codenameElement);

            if (project.image.length !== 0)
            {
                const backgroundImage = document.createElement(`img`);
                backgroundImage.className = `background`;
                backgroundImage.src = `/Assets/Textures/Backgrounds/${project.image}.png`;
                anchorElement.append(backgroundImage);
            }

            const iconsContainer = document.createElement(`div`);
            iconsContainer.className = `icons`;

            if (project.engine.length !== 0)
            {
                const engineElement = document.createElement(`div`);
                engineElement.className = project.engine;
                engineElement.title = `Engine`;
                iconsContainer.append(engineElement);
            }

            if (project.language.length !== 0)
            {
                const languageElement = document.createElement(`div`);
                languageElement.className = project.language;
                languageElement.title = `Programming language`;
                iconsContainer.append(languageElement);
            }

            if (project.repository.length !== 0)
            {
                const repositoryElement = document.createElement(`a`);
                repositoryElement.className = `repository`;
                repositoryElement.href = `https://www.github.com/${project.repository}`;
                repositoryElement.target = `_blank`;
                repositoryElement.title = `Open GitHub repository`;
                iconsContainer.append(repositoryElement);
            }

            if (project.steam.length !== 0)
            {
                const steamElement = document.createElement(`a`);
                steamElement.className = `steam`;
                steamElement.title = `Will be available on Steam`;
                iconsContainer.append(steamElement);
            }

            if (iconsContainer.children.length !== 0)
            {
                anchorElement.append(iconsContainer);
            }

            const footerElement = document.createElement(`div`);
            footerElement.className = `footer`;
            anchorElement.append(footerElement);

            this.container.append(anchorElement);
        });
    }
}

import { ProjectData } from "../Data/ProjectData"