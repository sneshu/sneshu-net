//
// File: Main.ts
// Description: Entry point of the application. 
//
// Copyright (c) 2025 Sneshu. All rights reserved.
// Unauthorized copying or use of this code is prohibited.
//

export class Main 
{
    private currentTime: number;
    private timestamp: number;
    private deltaTime: number;

    private canvas: CanvasManager;
    private tiles: TileManager;
    private projects: ProjectManager;

    private onWindowResizeBinder: (event: Event) => void;
    private loopBinder: () => void;

    constructor()
    {
        this.currentTime = 0;
        this.deltaTime = 0;
        this.timestamp = Date.now();

        this.canvas = new CanvasManager();
        this.tiles = new TileManager(this.canvas);
        this.projects = new ProjectManager();
        
        this.loopBinder = this.loop.bind(this);
        this.onWindowResizeBinder = this.onWindowResize.bind(this);
        window.addEventListener(`resize`, this.onWindowResizeBinder);
    }

    public start(): void
    {
        this.projects.createProjects();
        requestAnimationFrame(this.loopBinder);
    }

    private loop(): void
    {
        // Calculations
        this.deltaTimeUpdate();
        this.tiles.update(this.deltaTime);

        // Rendering
        this.canvas.clear();
        this.tiles.draw();

        requestAnimationFrame(this.loopBinder);
    }

    private deltaTimeUpdate(): void 
    {
        this.currentTime = Date.now();
        this.deltaTime = (this.currentTime - this.timestamp) / 1000;
        this.timestamp = this.currentTime;
    }

    private onWindowResize(): void 
    {
        this.canvas.onResize();
        this.tiles.onResize();
    }
}

document.addEventListener(`DOMContentLoaded`, async () => 
{ 
    const main = new Main();
    main.start();
});


import { CanvasManager } from "./Managers/CanvasManager";
import { TileManager } from "./Managers/TileManager";
import { ProjectManager } from "./Managers/ProjectManager";