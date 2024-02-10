import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Table, Input, Select } from 'antd'

import { FETCH_PRODUCTS } from '../../../redux/constants/App'
import { Loading } from '../../../components/shared-components/Loading'
import { PageHeader } from '../../../components/layout-components/PageHeader'
import { productsColumns } from './ProductsColumns'

const Products = () => {
  const dispatch = useDispatch()
  const { loading, products } = useSelector((store) => store.app)
  const [categories, setCategories] = useState([{ value: 'all', label: 'All' }])
  const [nameFilter, setNameFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  useEffect(() => {
    !products.length && dispatch({ type: FETCH_PRODUCTS })
  }, [products, dispatch])

  useEffect(() => {
    if (products.length) {
      const cats = [...new Set(products.map((el) => el.category))].map((item) => {
        return {
          value: item,
          label: item.charAt(0).toUpperCase() + item.slice(1)
        }
      })
      const updatedCats = (categories) => categories.concat(cats)
      setCategories(updatedCats)
    }
  }, [products])

  const handleSearchChange = (e) => setNameFilter(e.target.value)

  const handleFilterChange = (e) => setCategoryFilter(e)

  const columns = productsColumns()

  const filteredProducts = products
    .filter((product) => product.title.includes(nameFilter))
    .filter((product) => {
      if (categoryFilter === 'all') return product
      return product.category === categoryFilter
    })

  if (loading) return <Loading />

  return (
    <>
      <PageHeader display={true} title="sidenav.menu.products" />
      <div className="d-flex-row">
        <Input placeholder="Search" style={{ width: 250 }} onChange={handleSearchChange} />
        <Select
          defaultValue={categories[0]}
          options={categories}
          style={{ width: 250 }}
          onChange={handleFilterChange}
        />
      </div>
      <Card style={{ padding: '0px' }}>
        <Table columns={columns} dataSource={filteredProducts} rowKey="id" />
      </Card>
    </>
  )
}

export default Products
