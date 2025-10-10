//
// File: TileManager.ts
// Description: Manager of animated tiles that move inside site's header container.
//
// Copyright (c) 2025 Sneshu. All rights reserved.
// Unauthorized copying or use of this code is prohibited.
//

export class TileManager  
{
    private canvas: CanvasManager;
    private tiles: Array<TileData>;
    private readonly waveAmplitudeX: number;
    private readonly tileSizeMin: number;
    private readonly tileSizeMax: number;
    private readonly tileLineThickness: number;
    private readonly tileGapDistance: number;
    private readonly tileColor: string;
    private readonly backgroundColor: string;

    constructor(canvas: CanvasManager)
    {
        this.canvas = canvas;

        this.tiles = new Array<TileData>();
        this.waveAmplitudeX = 20;
        this.tileSizeMin = 80;
        this.tileSizeMax = 100;
        this.tileLineThickness = 10;
        this.tileGapDistance = 40;
        this.tileColor = `#8c3232`;
        this.backgroundColor = `#0c0424`;
        
        this.onResize();
    }

    public update(deltaTime: number): void
    {
        for (let i = 0; i < this.tiles.length; i++)
        {
            const tile = this.tiles[i];
            tile.timeOffset += deltaTime;
        }
    }

    public draw(): void
    {
        this.canvas.setFillStyle(this.tileColor);

        for (let i = 0; i < this.tiles.length; i++)
        {
            const x = i * this.tileGapDistance + Math.cos(this.tiles[i].timeOffset) * this.waveAmplitudeX;
            const y = this.canvas.getHeight() + Math.sin(this.tiles[i].timeOffset) - this.tileLineThickness * 2;
            this.canvas.drawRect(x, y, this.tiles[i].size);
        }
            
        this.canvas.setFillStyle(this.backgroundColor);
        for (let i = 0; i < this.tiles.length; i++)
        {
            const x = i * this.tileGapDistance + Math.cos(this.tiles[i].timeOffset) * this.waveAmplitudeX;
            const y = this.canvas.getHeight() + Math.sin(this.tiles[i].timeOffset) - this.tileLineThickness;
            this.canvas.drawRect(x, y, this.tiles[i].size);
        }

        this.canvas.setFillStyle(this.tileColor);
        for (let i = 0; i < this.tiles.length; i++)
        {
            const x = i * this.tileGapDistance + Math.cos(this.tiles[i].timeOffset) * this.waveAmplitudeX;
            const y = this.canvas.getHeight() + Math.sin(this.tiles[i].timeOffset);
            this.canvas.drawRect(x, y, this.tiles[i].size);
        }
         
    }

    public onResize(): void
    {
        const tilesCount = Math.ceil(window.innerWidth / this.tileGapDistance) + 1;

        if (this.tiles.length < tilesCount) 
        {
            for (let i = this.tiles.length; i < tilesCount; i++) 
            {
                let size = Math.ceil(Math.random() * (this.tileSizeMax - this.tileSizeMin)) + this.tileSizeMin;
                let timeOffset = Math.random() * 10;

                this.tiles.push(new TileData({ size, timeOffset }));
            }
            return;
        }

        this.tiles.splice(tilesCount, this.tiles.length - tilesCount);
    }
}

import { CanvasManager } from "./CanvasManager";
import { TileData } from "../Data/TileData";
