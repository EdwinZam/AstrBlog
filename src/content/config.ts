import { defineCollection, reference, z } from "astro:content";

const blogColletion = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine((img)=> img.width < 2000,{
            message: 'Image should be greater that 5000px'
        }),
        //relacion
        // author: z.string(),

        author: reference('author'),

        //relacion
        tags: z.array(z.string()),

        //Boolean
        isDraft: z.boolean().default(false),
    })
});

const authorCollection = defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string(),
        linkedIn : z.string(),
        github : z.string(),
        bio : z.string(),
        subtitle: z.string(),
    })

})

export const collections = {
    blog: blogColletion,
    author: authorCollection,
}

