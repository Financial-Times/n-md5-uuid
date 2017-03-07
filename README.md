
Attempt to generate a UUID v3 (MD5) from a Brightcove ID,

```
npm install
node test
```

Feed a list of Brightcove IDs to the generator, 

```
find ../next-video-archive/archive -type f | cut -d '/' -f 4 | node generate-uuids-from-brightcove
```
