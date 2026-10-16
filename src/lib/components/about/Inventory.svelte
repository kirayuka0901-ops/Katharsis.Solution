<div class="about-inventory">
    <div class="inventory-item"><div class="inventory-placeholder">01</div><p>Your device</p></div>
    <div class="inventory-item"><div class="inventory-placeholder">02</div><p>Your accessory</p></div>
    <div class="inventory-item"><div class="inventory-placeholder">03</div><p>Your setup item</p></div>
</div>

<style>
    .about-inventory {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: var(--padding-x);
    }

    .inventory-item {
        height: fit-content;
        display: grid;
        grid-template-rows: 1fr 2rem;
        gap: var(--padding-m);
    }
    .inventory-placeholder { min-height: 5rem; display: grid; place-items: center; border: 1px dashed var(--color-border); color: var(--color-accent); font-size: 1.5rem; }
    .inventory-item p { text-align: center; }

    /* RESPONSIVE */
    @media screen and (max-width: 728px) {
        .about-inventory {
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .inventory-item {
            display: flex;
            align-items: center;
            padding: var(--padding-s) 0;
        }
        .inventory-item:not(:last-child) {
            border-bottom: var(--border-width) solid var(--color-border);
        }
        .inventory-placeholder { min-width: 3rem; min-height: 3rem; }
    }
</style>
