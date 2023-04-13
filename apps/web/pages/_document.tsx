import Document, { Html, Head, Main, NextScript } from 'next/document'

// full structure of our app wrapps here
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* add meta tags, favicon, global stylesheets, etc. */}
                </Head>
                <body className="bg-white dark:bg-midnight transition-all duration-500">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument