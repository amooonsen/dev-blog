import React from 'react';

export default function BlogMainRecent() {
  return (
    <>
      <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog.
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          웹 개발자 조경문 블로그 입니다.
          <br />
          기술, 뉴스테러, 그리고 일상을 공유합니다.
        </h4>
      </div>
      <section>
        <div className="mb-8 md:mb-16">
          <div className="sm:mx-0">
            <a aria-label="Dynamic Routing and Static Generation" href="/posts/dynamic-routing">
              <div
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  position: 'relative',
                  boxSizing: 'border-box',
                  margin: 0,
                }}
              >
                <div style={{ display: 'block', boxSizing: 'border-box', paddingTop: '50%' }}></div>
                <img
                  alt="Cover Image for Dynamic Routing and Static Generation"
                  src="/posts/frontend/nextjs_font_opt_thumbnail.avif"
                  decoding="async"
                  className="shadow-sm hover:shadow-md transition-shadow duration-200"
                  style={{
                    visibility: 'visible',
                    position: 'absolute',
                    inset: 0,
                    boxSizing: 'border-box',
                    padding: 0,
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  sizes="100vw"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <a className="hover:underline" href="/posts/dynamic-routing">
                Dynamic Routing and Static Generation
              </a>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <time dateTime="2020-03-16T05:35:07.322Z">March 16, 2020</time>
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel
              fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities
              morbi tempus.
            </p>
          </div>
        </div>
      </section>
      <div>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          <div>
            <div className="mb-5">
              <div className="sm:mx-0">
                <a
                  aria-label="Learn How to Pre-render Pages Using Static Generation with Next.js"
                  href="/posts/hello-world"
                >
                  <div
                    style={{
                      display: 'block',
                      overflow: 'hidden',
                      position: 'relative',
                      boxSizing: 'border-box',
                      margin: 0,
                    }}
                  >
                    <div
                      style={{ display: 'block', boxSizing: 'border-box', paddingTop: '50%' }}
                    ></div>
                    <img
                      alt="Cover Image for Learn How to Pre-render Pages Using Static Generation with Next.js"
                      src="/posts/frontend/nextjs_font_opt_thumbnail.avif"
                      decoding="async"
                      className="shadow-sm hover:shadow-md transition-shadow duration-200"
                      style={{
                        visibility: 'visible',
                        position: 'absolute',
                        inset: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0px',
                        height: '0px',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      sizes="100vw"
                    />
                  </div>
                </a>
              </div>
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
              <a className="hover:underline" href="/posts/hello-world">
                Learn How to Pre-render Pages Using Static Generation with Next.js
              </a>
            </h3>
            <div className="text-lg mb-4">
              <time dateTime="2020-03-16T05:35:07.322Z">March 16, 2020</time>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel
              fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities
              morbi tempus.
            </p>
            <div className="flex items-center">
              <img
                src="/posts/frontend/nextjs_font_opt_thumbnail.avif"
                className="w-12 h-12 rounded-full mr-4"
                alt="Tim Neutkens"
              />
              <div className="text-xl font-bold">Tim Neutkens</div>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <div className="sm:mx-0">
                <a aria-label="Preview Mode for Static Generation" href="/posts/preview">
                  <div
                    style={{
                      display: 'block',
                      overflow: 'hidden',
                      position: 'relative',
                      boxSizing: 'border-box',
                      margin: 0,
                    }}
                  >
                    <div
                      style={{ display: 'block', boxSizing: 'border-box', paddingTop: '50%' }}
                    ></div>
                    <img
                      alt="Cover Image for Preview Mode for Static Generation"
                      src="/posts/frontend/nextjs_font_opt_thumbnail.avif"
                      decoding="async"
                      className="shadow-sm hover:shadow-md transition-shadow duration-200"
                      style={{
                        visibility: 'visible',
                        position: 'absolute',
                        inset: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0px',
                        height: '0px',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      sizes="100vw"
                    />
                  </div>
                </a>
              </div>
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
              <a className="hover:underline" href="/posts/preview">
                Preview Mode for Static Generation
              </a>
            </h3>
            <div className="text-lg mb-4">
              <time dateTime="2020-03-16T05:35:07.322Z">March 16, 2020</time>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel
              fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities
              morbi tempus.
            </p>
            <div className="flex items-center">
              <img
                src="/posts/frontend/nextjs_font_opt_thumbnail.avif"
                className="w-12 h-12 rounded-full mr-4"
                alt="Joe Haddad"
              />
              <div className="text-xl font-bold">Joe Haddad</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
