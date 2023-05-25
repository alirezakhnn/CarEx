import Document, { Html, Head, Main, NextScript } from 'next/document'

// full structure of our app wrapps here
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="xl:grid justify-center">
                <Head>
                    {/* add meta tags, favicon, global stylesheets, etc. */}
                    {/* <link rel="icon" type="image/svg+xml" href="/CarEx.svg" /> */}
                </Head>
                <body className="bg-white dark:bg-darknight transition-all duration-500 xl:w-[100rem] overflow-x-hidden">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument