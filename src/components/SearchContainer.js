import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as JsSearch from "js-search"
import { FaSearch } from "react-icons/fa"
import slugify from "../utils/slugify.js"

const query = graphql`
  {
    allContentfulRecipes(sort: { fields: title, order: ASC }) {
      nodes {
        id
        cookTime
        title
        prepTime
        image {
          gatsbyImageData
        }
        content {
          tags
        }
      }
    }
  }
`

const SearchContainer = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipes.nodes

  const [search, setSearch] = React.useState(null)
  const [searchResults, setSearchResults] = React.useState([])
  const [searchQuery, setSearchQuery] = React.useState("")
  const [queryResults, setQueryResults] = React.useState([])

  /**
   * rebuilds the overall index based on the options
   */
  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search("id")
    /**
     * defines an indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")

    dataToSearch.addIndex("title") // sets the index attribute for the data

    dataToSearch.addDocuments(recipes) // adds the data to be searched

    setSearch(dataToSearch)
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  const searchData = e => {
    setSearchQuery(e.target.value)

    if (search) {
      const queryResult = search.search(e.target.value)
      setSearchResults(queryResult)
    }
  }

  React.useEffect(() => {
    if (!search) {
      rebuildIndex()
    }

    if (searchQuery === "") {
      setQueryResults(recipes)
    } else {
      setQueryResults(searchResults)
    }
  }, [searchQuery, search])

  return (
    <div className="search-wrapper">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Find your recipe..."
          value={searchQuery}
          onChange={searchData}
          autoComplete="off"
        />
      </div>

      {searchQuery !== "" && (
        <div className="search-results">
          {searchResults.length ? (
            queryResults.map((recipe, index) => {
              const { id, title, prepTime, cookTime, image } = recipe
              const pathToImage = getImage(image)
              const slug = slugify(title)

              return index === queryResults.length - 1 ? (
                <Link key={id} to={`/${slug}`} className="result-item">
                  <GatsbyImage
                    image={pathToImage}
                    className="item-img"
                    alt={title}
                  />
                  <div className="item-description">
                    <h5>{title}</h5>
                    <p>Prep time: {prepTime} Minutes</p>
                    <p>Cook time: {cookTime} Minutes</p>
                  </div>
                </Link>
              ) : (
                <>
                  <Link key={id} to={`/${slug}`} className="result-item">
                    <GatsbyImage
                      image={pathToImage}
                      className="item-img"
                      alt={title}
                    />
                    <div className="item-description">
                      <h5>{title}</h5>
                      <p>Prep time: {prepTime} Minutes</p>
                      <p>Cook time: {cookTime} Minutes</p>
                    </div>
                  </Link>

                  <hr />
                </>
              )
            })
          ) : (
            <div>Keyword doesn't match any recipe</div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchContainer
