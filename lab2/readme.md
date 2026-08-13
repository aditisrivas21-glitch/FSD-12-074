# File System (FS Module)

Directly communicate with OS rather than browser,the common operations on a file for folder are:-
1. File-> Write File, Read File, Append File
2. Folder->Mkdir,rmdir,readdir
3. File Metadata->stat,lstat,rstat
4. Watch->Watch,Unwatch
5. Stream->readStream( ) , writeStream( )

All functions are Promise so it must be called with await keyword.

# Append file
Append file means adding new data at the end of an existing file without deleting or overwriting its previous contents.