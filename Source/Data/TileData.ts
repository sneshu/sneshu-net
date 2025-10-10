//
// File: TileData.ts
// Description: Stores animated tiles data.
//
// Copyright (c) 2025 Sneshu. All rights reserved.
// Unauthorized copying or use of this code is prohibited.
//

export class TileData implements ITileOptions
{
    size: number;
    timeOffset: number;
    
    constructor(options: Partial<ITileOptions>)
    {
        this.size = options.size ?? 40;
        this.timeOffset = options.timeOffset ?? 0;
    }
}

import { ITileOptions } from "../Options/ITileOptions";