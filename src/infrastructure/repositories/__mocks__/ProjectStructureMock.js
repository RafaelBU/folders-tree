export const projectStructureMock = {
  project_name: "Project 1",
  project_author: "Rafael Buzón Urbano",
  project_url: "https://projecturl.com/project1",
  files: ["file1.txt", "file2.png", "file3.jpg"],
  folder: {
    files: ["file1.gif", "file2.gif", "file3.css"],
    folder: {
      files: ["file1.js", "file2.php", "file3.py"],
      folder: {
        files: ["file1.h", "file2.c", "file3.net"],
        folder: {
          files: ["file1.ts", "file2.tsx", "file3.jpg"],
        },
      },
    },
  },
};
