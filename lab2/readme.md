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

# CRUD project

assume we are making a cart related project

1. User can add any product(id,name,price,qty) into cart.

2. User can see all the items of cart.

3. User can remove items from cart.

4. User can also update quantity of product.

5. All the items should be stored after termination of project.

