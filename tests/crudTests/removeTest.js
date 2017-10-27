module.exports = (request, server, endpoint, obj) => {
  describe('Remove', () => {
    test('Should remove', async () => {
      const response = await request(server).delete(`/api/${endpoint}/${obj._id}`)
      await expect(response.statusCode).toBe(200)
    })
    test('Should not remove with invalid id', async () => {
      const response = await request(server).delete(`/api/${endpoint}/59ea2376abf50718f0afaea3`)
      await expect(response.statusCode).toBe(404)
    })
  })
}
