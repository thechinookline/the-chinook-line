import styles from './SixBoxes.module.css'
import Link from 'next/link'

export default function SixBoxes(){

    const cards = [
        {
            id: 1,
            label: "Fare and Zone",
            href: "/",
            icon: "",
        },
        {
            id: 2,
            label: "Schedules & Map",
            href: "/",
            icon: "",
        },
        {
            id: 3,
            label: "Alert",
            href: "/",
            icon: "",
        },
        {
            id: 4,
            label: "Accessibility",
            href: "/",
            icon: "",
        },
        {
            id: 5,
            label: "Rider Guide",
            href: "/",
            icon: "",
        },
        {
            id: 6,
            label: "Amenities",
            href: "/",
            icon: "",
        }
    ]

    return(
        <section className={styles.section}>
            <div className={styles.grid}>
              {cards.map((card) => (
                <Link 
                  key={card.id}
                  href={card.href}
                  className={styles.card}>
                   <div className={styles.icon}>
                    {card.icon}
                   </div>
                   <div>
                    {card.label}
                   </div>
                </Link>
              ))}
            </div>
        </section>
    )
}