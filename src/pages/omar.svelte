<script>
    import {
        Card,
        CardContent,
        CardHeader,
        Link,
        Page,
        Navbar,
        Block,
        BlockTitle,
        useStore,
    } from "framework7-svelte";
    import CustomCard from "./../components/CustomCard.svelte";
    import store from "../js/haraj.js";

    //     let users = useStore('users', (value) => users = value);
    //     const loadUsers = () => {
    //   store.dispatch('getUsers');
    //   };
    //   loadUsers()
    //   console.log(users)
    //console.log(store.state.products[0])
    store.dispatch("getItems",{page:1});
    let items=[];
    $: console.log("the $ sign says: ", items);
        useStore(store,'gettItems',(value)=>{
            //console.log("inside suerStore",store.state.items)
            //console.log("inside suerStore",store.getters.filterTime)
            items=[...items,...value]
            //console.log("inside suerStore",items)
        })
        

    ///////////////////
    function name(params) {
        setTimeout(() => {
        console.log('before',items)

        }, 3000);
        console.log('after',items)
    }
    //////////k
    console.log("from omar.svelte", items);
    let url1 = "https://thumbcdn.haraj.com.sa/";
    let url3 = "/90x90/webp";
    name();
</script>

<Page>
    <Navbar title="Omar page" backLink="Back" />
    <BlockTitle>About My App</BlockTitle>
    <Block strong>
        <p>
            Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis
            sint nemo consequuntur, fugiat. Eius perferendis animi autem
            incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem
            illum consequuntur, a, quisquam.
        </p>
        <p>
            Laudantium neque magnam vitae nemo quam commodi, in cum dolore
            obcaecati laborum, excepturi harum, optio qui, consequuntur?
            Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis
            ex debitis, ut tenetur alias.
        </p>
    </Block>
    <Card
        outline="true"
        padding="false"
        noShadow="true"
        title="the header"
        content="Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, simple datasimple datasimple datasimple datasimple datasimple datasimple datasimple datasimple 
 datasimple datasimple datasimple datasimple datac"
        footer="here the footer"
    />

    {#each items as item}
        <CustomCard
            title={item.title}
            content={item.bodyTEXT}
            id={item.id}
            img={url1 + item.thumbURL + url3}
            images={item.imagesList}
        />
    {/each}
</Page>
