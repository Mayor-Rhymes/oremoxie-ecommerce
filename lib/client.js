import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({


    projectId: 'hrmt28mb',
    dataset: 'production',
    apiVersion: '2022-10-22',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
});


const builder = imageUrlBuilder(client)


export const urlFor = (source) => builder.image(source);




