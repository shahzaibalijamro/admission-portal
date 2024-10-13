"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Toggle = () => {
    const currentPage = usePathname()
    return (
        <div className="text-center mt-8">
            <div className="join">
                {currentPage === '/admission' ? <>
                    <Link href={'/'}>
                <input className="join-item btn" type="radio" name="options" aria-label="Admission Form" />
                </Link>
                <Link href={'/admission'}>
                <input className="join-item btn" type="radio" name="options" aria-label="Verify Admission" defaultChecked />
                </Link>
                </> : <>
                    <Link href={'/'}>
                <input className="join-item btn" type="radio" name="options" aria-label="Admission Form" defaultChecked/>
                </Link>
                <Link href={'/admission'}>
                <input className="join-item btn" type="radio" name="options" aria-label="Verify Admission" />
                </Link>
                </>}
            </div>
        </div>
    )
}

export default Toggle