(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9535:function(e,t,l){"use strict";var n=l(7294),a=l(5444);t.Z=function(){var e,t=null===(e=(0,a.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return n.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&n.createElement("p",null,(null==t?void 0:t.summary)||null))}},7704:function(e,t,l){"use strict";l.r(t);var n=l(7294),a=l(5444),r=l(9535),i=l(7198),o=l(3751);t.default=function(e){var t,l=e.data,s=e.location,c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=l.allMarkdownRemark.group;return 0===u.length?n.createElement(i.Z,{location:s,title:c},n.createElement(o.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(i.Z,{location:s,title:c},n.createElement(o.Z,{title:"All posts"}),n.createElement(r.Z,null),u.map((function(e){var t=e.nodes;return n.createElement("section",null,n.createElement("h1",null,n.createElement("p",null,e.fieldValue)),n.createElement("ol",{style:{listStyle:"none"}},t.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("small",null,e.frontmatter.date),n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))))))}))))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f6b56c7256bd7be345ab.js.map