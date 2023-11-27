import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useStatData from '../../../../hooks/useStats';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const [statsData, refetchStats, isStatPending] = useStatData()

    const userPerPage = 5
    const [currentPage, setCurrentPage] = useState(0)

    const { data: allUsers, isPending: isAllUserLoading, refetch: refetchUsers } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?page=${currentPage}&limit=${userPerPage}`)
            return res.data
        }
    })

    if (isStatPending) {
        return <h1>loading user stats  ... </h1>
    }
    const count = statsData?.userTotal
    console.log(count);

    const pageTotal = Math.ceil(count / userPerPage)
    const pages = [...Array(pageTotal).keys()]
    console.log(allUsers);

    const handleRole = (newRole, user) => {
        // const userInfo = { role: newRole }
        // axiosSecure.put(`/users/update/${user._id}`, { role: newRole  })
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: " Update Role!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/users/update/${user._id}`, { role: newRole })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetchUsers()
                            Swal.fire({
                                title: "Updated",
                                text: "Users Role has been Updated.",
                                icon: "success"
                            });

                        }
                    })

            }
        });

    }

    /**
     * 
    _id
    6561b62ad37fab26e8d03e2d
    name
    "shahriar"
    email
    "mostafizshahriar19@gmail.com"
    role
    "user"
    image
    "https://i.ibb.co/pzHjgGG/user17.jpg"
    __v
    0
    phone
    "12345678"
    _id
    name
    email
    role
    phone
     * **/
    return (
        <div className='w-full'>
            {/* table here  */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Parcels Booked </th>
                                <th>Change Role   </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers?.map((user, idx) =>
                                    <tr key={user._id}>
                                        <th>{idx + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.phone}</td>
                                        <td>{user?.bookingCount}</td>
                                        <td>
                                            <span className='flex gap-2'>
                                                <button
                                                    onClick={() => handleRole("admin", user)}
                                                    className='btn btn-warning btn-sm mx-2'>Make Admin </button>
                                                <button
                                                    onClick={() => handleRole("deliveryman", user)}
                                                    className='btn btn-warning btn-sm'>Make DeliveryMan </button>


                                            </span>

                                        </td>
                                    </tr>)
                            }



                        </tbody>
                    </table>
                </div>

            </div>
            {/* pagination here  */}

            <div className="flex justify-center w-full py-5">
                {
                    pages.map(page => <button
                        onClick={() => {
                            setCurrentPage(page)
                            refetchUsers()
                            refetchStats()
                        }}
                        className={`btn btn-sm ${page === currentPage ? "btn-info" : ""}`}
                        key={page} >{page + 1}</button>)
                }

            </div>
        </div>
    );
};

export default AllUsers;