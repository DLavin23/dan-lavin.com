/** @jsx jsx */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import { Box, Button, Heading, Text } from 'rebass'
import { ContactLinks, Layout, PostPreview } from '../components'

class HomeIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const featuredJournalEntries = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostPreview key={edge.node.fields.slug} post={edge.node} prefix='journal' />)

    // move to seperate file
    const currentDate = new Date()
    const currentHour = currentDate.getHours()

    const getWelcomeMessage = () => {
      if (currentHour >= 0 && currentHour < 12) {
        return (
          <Box
            alignItems="center"
            display="flex"
          >
            <Box as="span">Good Morning, I'm Dan!</Box>
          </Box>
        )

      }
      if (currentHour >= 12 && currentHour < 17) {
        return (
          <Box
            as="div"
            alignItems="center"
            display="flex"
          >
            <Box as="span">Good Afternoon, I'm Dan!</Box>
          </Box>
        )
      } else {
        return (
          <Box
            as="div"
            alignItems="center"
            display="flex"
          >
            <Box as="span">Good Evening, I'm Dan!</Box>
          </Box>
        )
      }
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        desc={description}
      >
        <Box py={[4,5]} width={['100%','85%', '65%']}>
          <Heading
            as="h4"
            fontSize={[3,4,5]}
            fontWeight="400"
            lineHeight="1.25"
            mb={3}
          >
            {getWelcomeMessage()}
          </Heading>
          <Heading
            as="h2"
            color="heading"
            fontSize={[6,7,7]}
            fontWeight="800"
            lineHeight="1.25"
            mb={3}
          >
            I'm a product leader with a passion for design, development &amp; user experience.
          </Heading>
          <Text as="p" color="text" fontSize={[3,4]} mb={3} fontFamily="body">
            Currently, I lead product at <Styled.a href="https://www.hatchloyalty.com/" target="_blank" rel="noopener noreferrer">Hatch</Styled.a> where our team is focused on building a technology platform designed to help businesses create stronger, more personal relationships with their customers.
          </Text>

          <ContactLinks />
        </Box>

        <Box py={4} width={['100%','85%', '65%']}>
          <Heading fontSize={[5,6]} mb={3}>
            Featured Writing
          </Heading>
          <Box as="hr" my={4} bg="hr" height="5px" width="40px"/>

          <Box fontFamily="Open Sans">
            {featuredJournalEntries}
          </Box>

          <Link to="/journal">
            <Button
              bg="primary"
              fontSize={2}
              fontWeight="bold"
              sx={{cursor: 'pointer', boxShadow: 'large'}}
            >
              View All
            </Button>
          </Link>
        </Box>
      </Layout>
    )
  }
}

export default HomeIndex

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "journal" } }, frontmatter: { featured: {eq: true}} }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`




// // move to seperate file
// const currentDate = new Date()
// const currentHour = currentDate.getHours()

// const getWelcomeMessage = () => {
//   if (currentHour >= 0 && currentHour < 12) {
//     return (
//       <Box
//         alignItems="center"
//         display="flex"
//       >
//         <Box as="span">Good Morning, I'm Dan!</Box>
//       </Box>
//     )

//   }
//   if (currentHour >= 12 && currentHour < 17) {
//     return (
//       <Box
//         as="div"
//         alignItems="center"
//         display="flex"
//       >
//         <Box as="span">Good Afternoon, I'm Dan!</Box>
//       </Box>
//     )
//   } else {
//     return (
//       <Box
//         as="div"
//         alignItems="center"
//         display="flex"
//       >
//         <Box as="span">Good Evening, I'm Dan!</Box>
//       </Box>
//     )
//   }
// }

// export default () => {
//   return (
//     <Layout>
//       <Box py={5} width={['100%','85%', '65%']}>
//         <Heading
//           as="h4"
//           fontSize={[3,4,5]}
//           fontWeight="400"
//           lineHeight="1.25"
//           mb={3}
//         >
//           {getWelcomeMessage()}
//         </Heading>
//         <Heading
//           as="h2"
//           fontSize={[6,7,7]}
//           fontWeight="800"
//           lineHeight="1.25"
//           mb={3}
//         >
//           I'm a product leader with a passion for design, development &amp; user experience.
//         </Heading>
//         <Text as="p" color="text" fontSize={[3,4]} mb={3} fontFamily="body">
//           Currently, I lead product at <Styled.a href="https://www.hatchloyalty.com/" target="_blank" rel="noopener noreferrer">Hatch</Styled.a> where our team is focused on building a technology platform designed to help businesses create stronger, more personal relationships with their customers.
//         </Text>

//         <ContactLinks />

//         {/* <Link to="/about">
//           <Button
//             fontSize={1}
//             fontWeight='bold'
//             fontFamily='Open Sans'
//             sx={{boxShadow: 'medium'}}
//           >
//             Learn More!
//           </Button>
//         </Link> */}
//       </Box>
//     </Layout>
//   )
// }