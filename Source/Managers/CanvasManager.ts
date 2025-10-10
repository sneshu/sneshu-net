//
// File: CanvasManager.ts
// Description: Wrapper for HTML canvas-related objects.
//
// Copyright (c) 2025 Sneshu. All rights reserved.
// Unauthorized copying or use of this code is prohibited.
//

export class CanvasManager
{
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    
    constructor()
    {
        this.canvas = document.querySelector(`canvas`)!;
        this.context = this.canvas.getContext(`2d`)!;

        if (!this.canvas || !this.context) throw new Error(`There was a problem with canvas creation.`);

        this.onResize();
    }
    
    public getHeight(): number
    {
        return this.canvas.height;
    }

    public setFillStyle(fillStyle: string): void
    {
        this.context.fillStyle = fillStyle;
    }

    public drawRect(x: number, y: number, size: number): void
    {
        this.context.beginPath();
        this.context.moveTo(x - size, y);
        this.context.lineTo(x, y + size / 2);
        this.context.lineTo(x + size, y);
        this.context.lineTo(x, y - size / 2);
        this.context.fill();
    }
    
    public clear(): void 
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    public onResize(): void 
    {
        this.canvas.width = window.innerWidth;
        this.canvas.height = 200;
    }
}