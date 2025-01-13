import type { MetadataRoute } from 'next'

type blog = {
    slug: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://printujto.cz'

    const response = await fetch(
        'https://res.cloudinary.com/dlhgypwnv/raw/upload/blogs.json',
        {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
        }
    )
    const blogs = await response.json()

    console.log(blogs)

    const blogUrls = blogs.map((blog: blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date().toISOString(), // Adjust according to your data
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://printujto.cz/o-nas',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://printujto.cz/poptat-tisk',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: 'https://printujto.cz/doprava-a-platba',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/gdpr',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/obchodni-podminky',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/reklamace',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/reklamace',
            lastModified: new Date(),
            priority: 0.1,
        },
        {
            url: 'https://printujto.cz/blog',
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: 'https://printujto.cz/blog',
            lastModified: new Date(),
            priority: 0.7,
        },
        ...blogUrls,
    ]
}
