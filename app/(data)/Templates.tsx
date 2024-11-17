export default [
    {
        name: 'Blog Title',
        desc: 'An AI Tool that generate blog title depends on your blog information and idea',
        category: 'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet manner only based on given niche & outlineand give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label: 'Enter blog outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI Tool that serves as your personal blog post title depends on your blog information',
        category: 'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
        aiPrompt: 'Generate blog content based on topic and outline  ',
        slug: 'blog-content-generation',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label: 'Enter blog outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI Tool that serves as your personal blog ideas depends on your blog information',
        category: 'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2065/2065254.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet manner only based on given niche & outlineand give me result in Rich text editor format',
        slug: 'blog-topic-idea',
        form:[
            {
                label:'Enter your Blog Topic Idea',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label: 'Enter Idea outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'An AI Tool that generates youtube tags depends on your information',
        category: 'Youtube tool',
        icon:'https://cdn-icons-png.flaticon.com/128/8359/8359651.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet manner only based on given niche & outlineand give me result in Rich text editor format',
        slug: 'youtube-tag',
        form:[
            {
                label:'Enter your Youtube Tags',
                field:'input',
                name:'title',
                required:true
            },
            {
                label: 'Enter tag outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'YouTube description',
        desc: 'An AI Tool that generates youtube description depends on your idea',
        category: 'Youtube description',
        icon:'https://cdn-icons-png.flaticon.com/128/8359/8359651.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet manner only based on given niche & outlineand give me result in Rich text editor format',
        slug: 'youtube-description',
        form:[
            {
                label:'Enter your Youtube Description',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label: 'Enter description outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI Tool that generates SEO title depends on your information about Seo title',
        category: 'Youtube seo',
        icon:'https://cdn-icons-png.flaticon.com/128/8359/8359651.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet manner only based on given niche & outlineand give me result in Rich text editor format',
        slug: 'youtube-seo',
        form:[
            {
                label:'Enter your SEO title',
                field:'input',
                name:'title',
                required:true
            },
            {
                label: 'Enter SEO outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article',
        desc: 'An AI Tool that generates article or Blog Post depends on your information',
        category: 'article',
        icon:'https://cdn-icons-png.flaticon.com/128/8980/8980709.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet manner only based on given niche & outlineand give me result in Rich text editor format',
        slug: 'article',
        form:[
            {
                label:'Enter your article name',
                field:'input',
                name:'content',
                required:true
            },
            {
                label: 'Enter article outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing , eliminating errors and redundancies for a clear and concise text',
        category: 'text',
        icon:'https://cdn-icons-png.flaticon.com/128/8980/8980709.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet manner only based on given niche & outlineand give me result in Rich text editor format',
        slug: 'text-improver',
        form:[
            {
                label:'Enter your text here',
                field:'input',
                name:'content',
                required:true
            },
            {
                label: 'Enter text outline',
                field:'textarea',
                name:'outline'
            }
        ]
    }
    

]