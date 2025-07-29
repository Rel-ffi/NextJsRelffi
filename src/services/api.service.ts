import {IUsers} from "@/types/IUsers";
import {IPosts} from "@/types/IPosts";
import {IComments} from "@/types/IComments";

export const getAllUsers = async ():Promise<IUsers[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

export const getAllPosts = async ():Promise<IPosts[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

export const getAllComments = async ():Promise<IComments[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    return response.json();
}

export const getUserById = async (id:string):Promise<IUsers> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
}
export const getPostById = async (id:string):Promise<IPosts> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}
export const getCommentById = async (id:string):Promise<IComments> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    return response.json();
}