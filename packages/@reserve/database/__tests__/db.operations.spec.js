import { InsertData, UpdateData, DeleteData, FindData, Names } from '../src'

describe('Insert / update / delete & select operations', () => {
  
    it('should insert data (places_tags_lists)', async () => {
        const q = await InsertData(Names.places_tags_lists, {
            name: 'insertingData'
        })

        expect(q.ok).toEqual(true)
    })

    it('should update data (places_tags_lists)', async () => {
        const q = await UpdateData(Names.places_tags_lists, {
            name: 'insertingData'
        },
        {
            name: 'updatingData'
        })
        expect(q.ok).toEqual(true)
    })

    it('should select data (places_tags_lists)', async () => {
        const q = await FindData(Names.places_tags_lists, 'name')
        console.log(q)
        expect(q.ok).toEqual(true)
    })

    it('should delete data (places_tags_lists)', async () => {
        const q = await DeleteData(Names.places_tags_lists, {
            name: 'updatingData'
        })
        expect(q.ok).toEqual(true)
    })
})
