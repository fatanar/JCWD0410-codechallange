import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFULL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
        content_type: "companyProfile"
    });
    const blogs = response.items.map((blog: any) => {
      return {
        title: blog.fields.title,
        slug: blog.fields.slug,
        description: blog.fields.description,
        image: blog.fields.image,
        author: blog.fields.author,
        category: blog.fields.category,
        content: blog.fields.content,
        createdAt: blog.fields.createdAt,
      };
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

