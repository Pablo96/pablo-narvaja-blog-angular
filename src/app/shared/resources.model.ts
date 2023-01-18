class Resource {
  extension: string;
  name: string;
  url: string;
  size: number;
  hash: string; // this is for detecting changes in the file
}

export class ImageRes extends Resource {
  width: number;
  height: number;
  pixel_format: string;
}

export class VideoRes extends Resource {
  width: number;
  height: number;
  duration_seconds: number;
  frame_rate: number;
  bits_per_second: number;
}

export class DocumentRes extends Resource {
}
