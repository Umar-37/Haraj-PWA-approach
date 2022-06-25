<script>
    import { Card, CardContent, CardHeader, Link } from "framework7-svelte";
    export let img =
        "https://mimg6cdn.haraj.com.sa/userfiles30/2022-6-22/684x912-1_-SzyDJoQBc22h7a.jpg";
    export let content = "default content";
    export let title = "Framework7 yayy";

    function doThis(params) {
        console.log("opend", params);
    }
</script>

<!-- when user click the card -->
<Card expandable onCardBeforeOpen={doThis}>
    <CardContent padding={false}>
        <div class="bg-color-blue" style="height:200px">
            <CardHeader textColor="white" class="display-block">
                {title}
                <br />
                <img alt="some img" src={img} width="90" height="90" />
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
            <p>
                {content}
            </p>
        </div>
    </CardContent>
</Card>
