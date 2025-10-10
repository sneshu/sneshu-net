//
// File: ProjectData.ts
// Description: Stores portfolio project data.
//
// Copyright (c) 2025 Sneshu. All rights reserved.
// Unauthorized copying or use of this code is prohibited.
//

export class ProjectData implements IProjectOptions
{
    codename: string;
    image: string;
    language: string;
    engine: string;
    repository: string;
    steam: string;
    href: string;
    
    constructor(options: Partial<IProjectOptions>)
    {
        this.codename = options.codename ?? "\"Untitled\"";
        this.image = options.image ?? "";
        this.language = options.language ?? "";
        this.engine = options.engine ?? "";
        this.repository = options.repository ?? "";
        this.steam = options.steam ?? "";
        this.href = options.href ?? "";
    }
}

import { IProjectOptions } from "../Options/IProjectOptions";