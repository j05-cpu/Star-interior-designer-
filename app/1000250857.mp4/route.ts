import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  // Check the root workspace folder of the project first
  const rootPath = path.join(process.cwd(), "1000250857.mp4");
  
  // Also check standard public folder
  const publicPath = path.join(process.cwd(), "public", "1000250857.mp4");
  
  // Also check inside assets folder
  const assetsPath = path.join(process.cwd(), "assets", "1000250857.mp4");

  let resolvedPath = "";

  if (fs.existsSync(rootPath)) {
    resolvedPath = rootPath;
  } else if (fs.existsSync(publicPath)) {
    resolvedPath = publicPath;
  } else if (fs.existsSync(assetsPath)) {
    resolvedPath = assetsPath;
  }

  if (resolvedPath) {
    const stat = fs.statSync(resolvedPath);
    const fileSize = stat.size;
    const range = req.headers.get("range");

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;
      
      const fileStream = fs.createReadStream(resolvedPath, { start, end });
      
      const headers = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize.toString(),
        "Content-Type": "video/mp4",
      };

      // Create a response with readable stream
      // We can cast the fileStream to any body Next.js accepts (ReadableStream)
      return new NextResponse(fileStream as any, {
        status: 260, // Partial Content
        statusText: "Partial Content",
        headers,
      });
    } else {
      const fileStream = fs.createReadStream(resolvedPath);
      const headers = {
        "Content-Length": fileSize.toString(),
        "Content-Type": "video/mp4",
        "Accept-Ranges": "bytes",
      };
      return new NextResponse(fileStream as any, { headers });
    }
  }

  // Dual Fallback: If the user hasn't uploaded "1000250857.mp4" into their workspace file explorer yet,
  // we redirect them to a gorgeous, premium, luxury dark-themed interior architecture design walkthrough video!
  // This guarantees they will see a beautiful live looping background video immediately!
  const aestheticVideoPlaceholder = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05c084a8c991f8682a39fc697cf8c22&profile_id=139&oauth2_token_id=57447761";
  
  return NextResponse.redirect(aestheticVideoPlaceholder);
}
