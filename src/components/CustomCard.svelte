<script>
    import { Card, CardContent, CardHeader, Link } from "framework7-svelte";
    export let img =
        "https://mimg6cdn.haraj.com.sa/userfiles30/2022-6-22/684x912-1_-SzyDJoQBc22h7a.jpg";
    export let content = "default content";
    export let title = "Framework7 yayy";
    export let id = 0;
    export let images = true;

    let thumb = "";
    function hideThumb(params) {
        console.log("show")
        images=true
        thumb = document.getElementById(`${id}`);
        thumb.style.display = "none";
    }
    function showThumb(params) {
        console.log("hide")
        images=true
        thumb.style.display = "block";
        images=false
    }
</script>

<!-- when user click the card -->
<Card expandable onCardBeforeOpen={hideThumb} onCardClose={showThumb}>
    <CardContent padding={false}>
        <div class="bg-color-blue" style="height:200px">
            <CardHeader dir="rtl" style="padding-right:13%;"  textColor="white" class="display-block">
                <span dir="rtl">{title}</span>
                <br />
                <img 
                    {id}
                    alt="some img"
                    style="object-fit:fit;padding-right:70%;"
                    src={img}
                    width="30%"
                    height="20%"
                />
            </CardHeader>
            <Link 
                cardClose
                color="white"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
            />
        </div>
        <div class="card-content-padding">
            <article style="display: block;white-space:pre-wrap;" dir="rtl">
                {content}
            </article>
            <br />
            {#if images}
                <div>
                    {#each images as imge}
                        <img
                            alt="some img"
                            style="max-width:100%;align-self:center;height:auto;"
                            src={imge}
                        />
                    {/each}
                </div>
            {/if}
        </div>
    </CardContent>
</Card>
