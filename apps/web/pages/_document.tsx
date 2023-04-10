import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* add meta tags, favicon, global stylesheets, etc. */}
                </Head>
                <body className="bg-white dark:bg-midnight">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument