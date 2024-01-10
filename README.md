# adapter-node bug repro

Start the repro...

```
pnpm i
pnpm start
```

...then post an unreasonably large payload to the `/post` route:

```
curl --data 42 http://localhost:3000/post
```

The console should print this...

```
{ status: 413, message: 'Payload Too Large' }
```

...but it prints this instead:

```
{ status: 500, message: 'Internal Error' }
```
