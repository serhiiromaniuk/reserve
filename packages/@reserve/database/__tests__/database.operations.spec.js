import { InsertData, UpdateData, DeleteData, FindData, names } from '../src/schema'

describe('Insert / update / delete & select operations', () => {
  
    it('should isert data', async () => {
        const q = await InsertData(names.places_tags_lists, {
            name: 'insertingData'
        })

        expect(q.ok).toEqual(true)
    })

    it('should update data', async () => {
        const q = await UpdateData(names.places_tags_lists, {
            name: 'insertingData'
        },
        {
            name: 'updatingData'
        })
        expect(q.ok).toEqual(true)
    })

    it('should select data', async () => {
        const q = await FindData(names.places_tags_lists, 'name',{
            name: 'updatingData'
        })
        console.log(q)
        expect(q.ok).toEqual(true)
    })

    it('should delete data', async () => {
        const q = await DeleteData(names.places_tags_lists, {
            name: 'updatingData'
        })
        console.log(q)
        expect(q.ok).toEqual(true)
    })
})
