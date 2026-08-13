import { mkdir,rm } from "fs/promises";

//await mkdir("uploads/resume", { recursive: true });
//await mkdir("uploads/images" );

//remove directory
await rm("uploads", { recursive: true});

