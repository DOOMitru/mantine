import type { Patient } from "../types"

const ListOfPatients: Patient[] = [
    {"id":"c6bea3f9-c9e1-47bd-ab4e-47f5940db6c3","firstName":"Dare","lastName":"Coster","phoneNumber":"733-203-5163"},
    {"id":"abdfb5f3-a0f1-4b32-b266-0a67a6679d3e","firstName":"Daryn","lastName":"Pyburn","phoneNumber":"338-166-7735"},
    {"id":"7a7fabd5-9303-4421-b0ac-2826c0806f57","firstName":"Analise","lastName":"Coleiro","phoneNumber":"892-380-4537"},
    {"id":"1adf0a9a-bae3-47d2-ae38-297d6a19e0c8","firstName":"Cherice","lastName":"Jeanequin","phoneNumber":"555-441-4038"},
    {"id":"516b8362-7985-4e75-a0cf-98b712170781","firstName":"Desiri","lastName":"Spellward","phoneNumber":"255-486-6915"},
    {"id":"4bdf3c3b-2629-48d7-9c35-d1b6546552d7","firstName":"Shara","lastName":"Vankin","phoneNumber":"901-100-2099"},
    {"id":"ef163eac-a730-4f34-901b-f380cfddaf34","firstName":"Fiann","lastName":"Stribbling","phoneNumber":"364-589-9615"},
    {"id":"48e1b3be-c8dc-4902-afb0-57d869ff789e","firstName":"Johny","lastName":"Tomik","phoneNumber":"371-334-1115"},
    {"id":"3ffa9bd6-27f3-474f-94ca-110519b36197","firstName":"Jayne","lastName":"Keeves","phoneNumber":"772-965-4939"},
    {"id":"08af7fc1-d2d6-4ec5-8c73-58f6bf5718f4","firstName":"Anthia","lastName":"Carder","phoneNumber":"658-282-5467"},
    {"id":"8bd3b124-e80a-48d3-a4e8-f97afd10252b","firstName":"Annabelle","lastName":"Skirlin","phoneNumber":"135-303-1895"},
    {"id":"59f17f88-09c5-4673-9954-0ddc95691640","firstName":"Langston","lastName":"Verna","phoneNumber":"517-687-5814"},
    {"id":"fc46e85d-e681-4773-b90d-410fab6cecb2","firstName":"Saw","lastName":"de Copeman","phoneNumber":"829-608-3943"},
    {"id":"d895220c-8bb6-4d63-af09-770976d0ac90","firstName":"Anissa","lastName":"Spira","phoneNumber":"753-320-3406"},
    {"id":"a74c2ce1-9f5d-42e8-ab24-3304a37d9175","firstName":"Aguie","lastName":"Bynert","phoneNumber":"160-260-3126"},
    {"id":"ef100c90-d6f8-4952-88d3-44ef64197db3","firstName":"Elli","lastName":"Shillabear","phoneNumber":"818-798-1522"},
    {"id":"4717e5e5-6016-4169-9e7d-59b33992d88c","firstName":"Leila","lastName":"Welch","phoneNumber":"697-530-1261"},
    {"id":"16b30135-c40d-4cc7-8e6d-fddc64ea5c70","firstName":"Adan","lastName":"Cassidy","phoneNumber":"368-141-7039"},
    {"id":"636b71e5-2aee-43b0-ac11-cc3886c0385d","firstName":"Carmelita","lastName":"Yitzhakov","phoneNumber":"278-852-3224"},
    {"id":"3d5a731d-6f86-4655-b3ac-e7a2f6955f50","firstName":"Diena","lastName":"Cawse","phoneNumber":"173-645-3409"}
]

export const apiGetPatientsList = () => {
  return new Promise<Patient[]>((resolve) => {
    setTimeout(() => resolve(ListOfPatients), 1500)
  })
}