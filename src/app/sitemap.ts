import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://ocnilatalova.cz'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: baseUrl + '/ocni-optika',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: baseUrl + '/ocni-optika/cocky',
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: baseUrl + '/ocni-ordinace',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: baseUrl + '/ortoptika',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: baseUrl + '/ortoptika/cviceni',
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: baseUrl + '/zrakovy-terapeut',
            lastModified: new Date(),
            priority: 0.9,
        },
    ]
}
